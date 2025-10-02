import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoView}>
            <Image source={require('@/images/logo.webp')} style={styles.logo2} />
            <Text style={styles.logo}>Home</Text>
          </View>
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 16 }} />
            <Ionicons name="menu" size={24} color="black" />
          </View>
        </View>

        {/* Search */}
        <TextInput style={styles.search} placeholder="Search" placeholderTextColor="#aaa" />

        {/* Featured */}
        <Text style={styles.sectionTitle}>Featured Rides</Text>
        <View style={styles.featuredCard} />

        {/* Recommended */}
        <Text style={styles.sectionTitle}>Recommended</Text>
        <View style={styles.row}>
          <View style={styles.smallCard} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.linkText}>Ride to Ioannina</Text>
            <Text style={styles.subText}>4km away</Text>
          </View>
        </View>

        {/* Upcoming */}
        <Text style={styles.sectionTitle}>Upcoming</Text>
        <View style={styles.row}>
          <View style={styles.smallCard} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.boldText}>Morning Ride</Text>
            <Text style={styles.subText}>45km away</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>See Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    paddingTop: 20
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,

  },
  logo: {
    fontSize: 18,
    fontWeight: "700",
    paddingLeft: 15
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    backgroundColor: "#e6e6e6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 12,
  },
  featuredCard: {
    height: 120,
    borderRadius: 12,
    backgroundColor: "#e06c6c",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  smallCard: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#e06c6c",
  },
  linkText: {
    color: "#0044cc",
    fontWeight: "600",
  },
  subText: {
    color: "#555",
    marginTop: 2,
  },
  boldText: {
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#003366",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  logo2:{
    width: 65,
    height: 65,
    borderRadius: 35
  },
  logoView:{
    flexDirection: "row",
    alignItems: "center"
  }
});
