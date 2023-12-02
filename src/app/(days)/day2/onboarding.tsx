//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Stack, useRouter} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Directions, Gesture} from 'react-native-gesture-handler';
import { GestureDetector } from 'react-native-gesture-handler';

const ONBOARDING_STEPS = [
  {
    title: 'Track Every Penny',
    description: 'Monitor your spending and contribution ensuring every penny is accounted for. This will help you to make better financial decisions.',
    image: 'money',
    button: 'Get Started',
    step: 0,
  },
  {
    title: 'Track Every Coin',
    description: 'Monitor your spending and contribution ensuring every penny is accounted for. This will help you to make better financial decisions.',
    image: 'snowflake-o',
    button: 'Continue',
    step: 1,
  },
  {
    title: 'Track Every Dollar',
    description: 'Monitor your spending and contribution ensuring every penny is accounted for. This will help you to make better financial decisions.',
    image: 'compress',
    button: 'Confirm & Pay',
    step: 2,
  },
]

const Onboarding = () => {
  const router = useRouter();
  const [screenIndex, setScreenIndex] = useState(0);
  const data = ONBOARDING_STEPS[screenIndex];

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if(isFirstScreen) {
      router.push('/');
    } else {
      setScreenIndex(screenIndex - 1);
    }
  }

  const onNext = () => {
    const isLastScreen = screenIndex === ONBOARDING_STEPS.length - 1;
    if(isLastScreen) {
      router.push('/');
    } else {
      setScreenIndex(screenIndex + 1);
    }
  }

  const swipeForward = Gesture.Fling().direction(Directions.LEFT).onEnd(onNext);
  const swipeBackward = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);
  const swipes = Gesture.Simultaneous(swipeBackward, swipeForward);

  const onSkip = () => {
    router.push('/');
  }

  return (
  <GestureDetector gesture={swipes}>
    <View className="pt-16 bg-[#15141A] h-screen items-center justify-center">
      <Stack.Screen options={{ headerShown: false}} />
      <View className="bg-[#15141A] h-full justify-between">
        <View>
          <View style={styles.stepIndicatorContainer}>
            {ONBOARDING_STEPS.map((step, index) => (
              <View key={index} className={`flex-1 h-1 bg-white rounded-md ${screenIndex === index && 'bg-purple-400'}`} style={styles.stepIndicator}/>
            ))}
          </View>
          <FontAwesome style={styles.image} name={data.image} size={40} color="#FDFDFD" />
        </View>
          <View className="mb-16">
            <Text style={styles.title} className="text-gray-200">
              {data.title}
            </Text>
            <Text className="text-gray-300 text-lg spacing-wide">
              {data.description}
            </Text>

            <View className={"flex flex-row"}>
              <TouchableOpacity onPress={onSkip} activeOpacity={0.7} className="" style={styles.skipButton}>
                <Text className="text-gray-200 text-lg spacing-wide">
                  Skip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onNext()} activeOpacity={0.7} className="" style={styles.button}>
                <Text className="text-gray-200 text-lg spacing-wide">
                  {data.button}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
    </GestureDetector>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15141A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 35,
    marginBottom: 10,
    letterSpacing: 1.3,
  },
  image: {
    fontFamily: 'Inter',
    fontSize: 60,
    letterSpacing: 1.3,
    alignSelf: 'center',
    margin: 20,
    marginTop: 50,
  },
  footer: {
    margin: 'auto'
  },
  button: {
    backgroundColor: '#302E38',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  skipButton: {
    backgroundColor: '#15141A',
    padding: 13,
    borderRadius: 10,
    width: 100,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#302E38',
    marginRight: 10,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    marginTop: 20,
  },
  stepIndicator: {
    margin: 5
  }
});
