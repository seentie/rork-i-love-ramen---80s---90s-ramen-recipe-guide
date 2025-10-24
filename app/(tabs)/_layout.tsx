import { Tabs } from "expo-router";
import { Home, BookOpen, ChefHat, Settings, UtensilsCrossed, Flame } from "lucide-react-native";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF1493",
        tabBarInactiveTintColor: "#8A2BE2",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 2,
          borderTopColor: "#FF1493",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: "RECIPES",
          tabBarIcon: ({ color, size }) => <BookOpen color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: "PICKS",
          tabBarIcon: ({ color, size }) => <UtensilsCrossed color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="spicy"
        options={{
          title: "SPICY",
          tabBarIcon: ({ color, size }) => <Flame color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="gear"
        options={{
          title: "GEAR",
          tabBarIcon: ({ color, size }) => <ChefHat color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "SETTINGS",
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}