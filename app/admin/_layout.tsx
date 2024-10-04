import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AdminAddIcon } from "@/components/navigation/AdminAddIcon";
import { TabHomeIcon } from "@/components/navigation/TabHomeIcon";
import { AdminEditIcon } from "@/components/navigation/AdminEditIcon";

export default function AdminLayout() {
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
        name="Add"
        options={{
          title: "Añadir",
          tabBarIcon: ({ color, focused }) => (
            <AdminAddIcon
              name={focused ? "pluscircle" : "pluscircleo"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Edit"
        options={{
          title: "Editar",
          tabBarIcon: ({ color, focused }) => (
            <AdminEditIcon
              name={focused ? "content-save-edit" : "content-save-edit-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
