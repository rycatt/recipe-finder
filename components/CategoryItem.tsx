import { Text, TouchableOpacity } from 'react-native';

interface CategoryItemProps {
  children: React.ReactNode;
}

export const CategoryItem = ({ children }: CategoryItemProps) => {
  return (
    <TouchableOpacity className="px-6 py-4 bg-gray-100 mx-2 rounded-full">
      <Text className="text-lg">{children}</Text>
    </TouchableOpacity>
  );
};
