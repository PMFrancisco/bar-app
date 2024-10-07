import { Tabs } from "expo-router";
import React from "react";

import { TabHomeIcon } from "@/components/navigation/TabHomeIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabKitchenIcon } from "@/components/navigation/TabKitchenIcon";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabHomeIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Bar"
        options={{
          title: "Bar",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "beer" : "beer-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cocina"
        options={{
          title: "Cocina",
          tabBarIcon: ({ color, focused }) => (
            <TabKitchenIcon
              name={focused ? "kitchen-set" : "kitchen-set"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
