import { REACT_APP_API_KEY } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export const FoodList = () => {
  const apiKey = REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const cachedData = await AsyncStorage.getItem('recipesCache');
        if (cachedData) {
          setRecipes(JSON.parse(cachedData));
        } else {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=9`
          );
          if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
          }

          const data = await response.json();
          setRecipes(data.results);
          await AsyncStorage.setItem('recipesCache', JSON.stringify(data.results));
          console.log('Data:', data.results);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, [apiKey]);

  if (loading)
    return (
      <View className="flex-1 items-center mt-4">
        <ActivityIndicator size="small" />
        <Text className="mt-4">Loading, please wait...</Text>
      </View>
    );
  if (error)
    return (
      <Text className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
        Oops! Something went wrong: {error}
      </Text>
    );

  return <View></View>;
};
