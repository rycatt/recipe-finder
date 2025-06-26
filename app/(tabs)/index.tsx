import { CategoryItem } from '@/components/CategoryItem';
import { ChefHat } from 'lucide-react-native';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-8 py-24">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-4xl font-semibold">Good Morning!</Text>
            <Text className="text-slate-500 font-light text-xl">
              What would you like to cook today?
            </Text>
          </View>
          <View className="bg-green-100/50 p-2 rounded-full">
            <ChefHat color="green" size={28} />
          </View>
        </View>
        <View className="mt-8">
          <Text className="text-3xl font-medium">Categories</Text>
          <ScrollView horizontal={true} className="py-4">
            <CategoryItem>Italian</CategoryItem>
            <CategoryItem>Chinese</CategoryItem>
            <CategoryItem>Japanese</CategoryItem>
            <CategoryItem>Mexican</CategoryItem>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
