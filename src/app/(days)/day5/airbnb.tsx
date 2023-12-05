//@ts-nocheck
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Stack} from "expo-router";
import MapView, {Marker} from "react-native-maps";
import {APARTMENTS} from "@/src/assets/data/day5/data";
import CustomMarker from "@/src/components/day5/CustomMarker";
import ApartmentListItem from "@/src/components/day5/ApartmentListItem";
import BottomSheet, {BottomSheetFlatList, useGestureEventsHandlersDefault} from '@gorhom/bottom-sheet';
import {Gesture} from "react-native-gesture-handler";

const Airbnb = () => {
  const isSelected = false;
  const [selectedApartment, setSelectedApartment] = useState();
  const [mapRegion, setMapRegion] = useState({
    latitude: 54.6896,
    longitude: 25.2799,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [80, '50%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const gestureHandler = Gesture.Pan({}).onBegin((event) => {
    console.log(event);
  })
  .onUpdate((event) => {
    console.log(event);
  })

  return (
    <>
      <Stack.Screen options={{ title: 'Day 5 Animated Maps', headerShown: false}} />
      <View className="flex-1">
        <MapView
          style={styles.map}
          provider="google"
          initialRegion={mapRegion}
          region={mapRegion}
        >
          {APARTMENTS.map((apartment, index) => (
            <CustomMarker
              apartment={apartment}
              setSelectedApartment={setSelectedApartment}
              selectedApartment={selectedApartment}
              key={index} />
          ))}
        </MapView>

        {selectedApartment && <View style={{
          position: 'absolute',
          bottom: typeof snapPoints[0] === 'number' ? snapPoints[0] + 10 : 100,
          left: 10,
          right: 10,
        }}><ApartmentListItem apartment={selectedApartment} /></View>}

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          // enablePanDownToClose={true}
          // gestureEventsHandlerHook={gestureHandler}
        >
          <View className={"flex items-center justify-center mb-2"}>
            <Text className="text-lg font-semibold">Over 1000 places</Text>
          </View>

          <BottomSheetFlatList
            data={APARTMENTS}
            contentContainerStyle={{ gap: 10, padding: 10, paddingBottom: 50}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ApartmentListItem apartment={item} />}
            keyExtractor={(item) => item.title}
          />
        </BottomSheet>
      </View>
    </>
  );
};

export default Airbnb;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    // flex: 1,
    // alignItems: 'center',
  },
  card: {
    position: 'absolute',
    bottom: 100,
    left: 10,
    right: 10,
  }
});
