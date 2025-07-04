import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GradientButton({ title, onPress }) {
  return (
    <View className="rounded-md overflow-hidden self-start">
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient
          colors={['#f97316', '#ea580c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="px-5 py-2"
        >
          <Text className="text-white text-sm font-semibold text-center tracking-wide">
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
