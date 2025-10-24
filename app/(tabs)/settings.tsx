import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight, Mail, Phone, MapPin, Shield, Info } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NoodleBackground from "@/components/NoodleBackground";

export default function SettingsScreen() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const insets = useSafeAreaInsets();

  const handleEmailPress = () => {
    Linking.openURL("mailto:sarah@oldskoolapps.com");
  };

  const handlePhonePress = () => {
    Linking.openURL("tel:+16465409602");
  };

  const handleAddressPress = () => {
    const address = "2114 N Flamingo Road #867, Pembroke Pines, FL 33028";
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  if (showPrivacy) {
    return (
      <NoodleBackground>
        <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setShowPrivacy(false)}
          >
            <ChevronRight size={24} color="#FF1493" style={styles.backIcon} />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.privacyContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.privacyTitle}>Privacy Policy</Text>
          <Text style={styles.privacyDate}>(Last Updated: January 2025)</Text>

          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.privacyText}>
            OLD SKOOL APPS (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application.
          </Text>

          <Text style={styles.sectionTitle}>Information We Collect</Text>
          
          <Text style={styles.subSectionTitle}>Information You Provide</Text>
          <Text style={styles.privacyText}>
            • Account information (name, email address){'\n'}
            • Profile information you choose to share{'\n'}
            • Content you create or upload{'\n'}
            • Communications with us
          </Text>

          <Text style={styles.subSectionTitle}>Information Automatically Collected</Text>
          <Text style={styles.privacyText}>
            • Device information (device type, operating system){'\n'}
            • Usage data (how you interact with the app){'\n'}
            • Log data (app crashes, performance metrics){'\n'}
            • Location data (if you grant permission)
          </Text>

          <Text style={styles.sectionTitle}>How We Use Your Information</Text>
          <Text style={styles.privacyText}>
            We use your information to:{'\n\n'}
            • Provide and improve our app services{'\n'}
            • Create and maintain your account{'\n'}
            • Send important updates and notifications{'\n'}
            • Respond to your questions and support requests{'\n'}
            • Analyze app usage to improve user experience{'\n'}
            • Ensure app security and prevent fraud
          </Text>

          <Text style={styles.sectionTitle}>Information Sharing</Text>
          <Text style={styles.privacyText}>
            We do not sell your personal information. We may share your information only in these situations:{'\n\n'}
            • With your consent - When you explicitly agree{'\n'}
            • Service providers - Third parties who help us operate the app{'\n'}
            • Legal requirements - When required by law or to protect rights and safety{'\n'}
            • Business transfers - If our company is sold or merged
          </Text>

          <Text style={styles.sectionTitle}>Data Security</Text>
          <Text style={styles.privacyText}>
            We implement appropriate security measures to protect your information, including:{'\n\n'}
            • Encryption of sensitive data{'\n'}
            • Secure data transmission{'\n'}
            • Regular security assessments{'\n'}
            • Limited access to personal information
          </Text>

          <Text style={styles.sectionTitle}>Your Rights</Text>
          <Text style={styles.privacyText}>
            You have the right to:{'\n\n'}
            • Access your personal information{'\n'}
            • Correct inaccurate information{'\n'}
            • Delete your account and data{'\n'}
            • Opt out of marketing communications{'\n'}
            • Request data portability (where applicable){'\n\n'}
            To exercise these rights, contact us at sarah@oldskoolapps.com.
          </Text>

          <Text style={styles.sectionTitle}>Children&apos;s Privacy</Text>
          <Text style={styles.privacyText}>
            Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we discover we have collected such information, we will delete it promptly.
          </Text>

          <Text style={styles.sectionTitle}>Third-Party Services</Text>
          <Text style={styles.privacyText}>
            Our app may contain links to third-party services or integrate with other platforms. This privacy policy does not apply to those services. Please review their privacy policies separately.
          </Text>

          <Text style={styles.sectionTitle}>Changes to This Policy</Text>
          <Text style={styles.privacyText}>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by:{'\n\n'}
            • Posting the updated policy in the app{'\n'}
            • Sending you an email notification{'\n'}
            • Displaying a notice when you next open the app
          </Text>

          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.privacyText}>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:{'\n\n'}
            Email: sarah@oldskoolapps.com{'\n'}
            Address: 2114 N Flamingo Road #867, Pembroke Pines, FL 33028{'\n'}
            Phone: (646)-540-9602{'\n\n'}
            App version: 1.0
          </Text>

          <View style={styles.spacer} />
        </ScrollView>
        </View>
      </NoodleBackground>
    );
  }

  return (
    <NoodleBackground>
      <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SETTINGS</Text>
          <Text style={styles.subtitle}>App Configuration & Info</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>LEGAL</Text>
          
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => setShowPrivacy(true)}
          >
            <View style={styles.settingLeft}>
              <Shield size={24} color="#FF1493" />
              <Text style={styles.settingText}>Privacy Policy</Text>
            </View>
            <ChevronRight size={20} color="#8A2BE2" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>CONTACT US</Text>
          
          <TouchableOpacity
            style={styles.settingItem}
            onPress={handleEmailPress}
          >
            <View style={styles.settingLeft}>
              <Mail size={24} color="#FF1493" />
              <View>
                <Text style={styles.settingText}>Email</Text>
                <Text style={styles.settingSubtext}>sarah@oldskoolapps.com</Text>
              </View>
            </View>
            <ChevronRight size={20} color="#8A2BE2" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={handlePhonePress}
          >
            <View style={styles.settingLeft}>
              <Phone size={24} color="#FF1493" />
              <View>
                <Text style={styles.settingText}>Phone</Text>
                <Text style={styles.settingSubtext}>(646) 540-9602</Text>
              </View>
            </View>
            <ChevronRight size={20} color="#8A2BE2" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={handleAddressPress}
          >
            <View style={styles.settingLeft}>
              <MapPin size={24} color="#FF1493" />
              <View style={styles.addressContainer}>
                <Text style={styles.settingText}>Address</Text>
                <Text style={styles.settingSubtext}>
                  2114 N Flamingo Road #867{'\n'}
                  Pembroke Pines, FL 33028
                </Text>
              </View>
            </View>
            <ChevronRight size={20} color="#8A2BE2" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>ABOUT</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Info size={24} color="#FF1493" />
              <View>
                <Text style={styles.settingText}>App Version</Text>
                <Text style={styles.settingSubtext}>1.0</Text>
              </View>
            </View>
          </View>

          <View style={styles.aboutSection}>
            <View style={styles.retro85Container}>
              <LinearGradient
                colors={['#FF00FF', '#FF1493', '#FF6B9D', '#FFD700', '#00FFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientBorder}
              >
                <View style={styles.retro85Inner}>
                  <Text style={styles.appNameText}>I LOVE RAMEN 1985</Text>
                  <View style={styles.neonLines}>
                    <View style={[styles.neonLine, { backgroundColor: '#FF00FF' }]} />
                    <View style={[styles.neonLine, { backgroundColor: '#00FFFF' }]} />
                    <View style={[styles.neonLine, { backgroundColor: '#FFD700' }]} />
                  </View>
                </View>
              </LinearGradient>
            </View>
            <Text style={styles.aboutText}>
              Your ultimate 80s/90s inspired ramen recipe guide. Discover amazing ramen recipes, 
              daily quotes, fun facts, and cooking tips. Made with love by OLD SKOOL APPS.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>FULL DISCLOSURE</Text>
          
          <View style={styles.disclosureSection}>
            <Text style={styles.disclosureText}>
              We&apos;ve eaten a ton of ramen but have not tested these recipes that Ramen insisted be included. What we do know is YOU + RAMEN = 🩷
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>RAMEN HISTORY</Text>
          
          <View style={styles.historySection}>
            <Text style={styles.historyText}>
              Ramen originated in China and arrived in Japan in the late 19th century, quickly becoming 
              a beloved staple. In 1958, Momofuku Ando revolutionized the food world by inventing instant 
              ramen, creating an affordable, quick meal that would feed millions. By the 1970s, instant 
              ramen had spread globally, becoming a cultural phenomenon.{"\n\n"}
              
              For college students in the 80s and 90s, ramen was more than just food—it was a lifeline. 
              At just pennies per packet, it fueled late-night study sessions, sustained tight budgets, 
              and brought comfort during tough times. Budget-friendly and incredibly versatile, ramen 
              got many of us through our formative years, creating memories that last a lifetime.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>TOP 10 COUNTRIES FOR RAMEN</Text>
          
          <View style={styles.countryList}>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>1</Text>
              <Text style={styles.countryName}>Japan</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>2</Text>
              <Text style={styles.countryName}>South Korea</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>3</Text>
              <Text style={styles.countryName}>Taiwan</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>4</Text>
              <Text style={styles.countryName}>Hong Kong</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>5</Text>
              <Text style={styles.countryName}>China</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>6</Text>
              <Text style={styles.countryName}>Thailand</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>7</Text>
              <Text style={styles.countryName}>Singapore</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>8</Text>
              <Text style={styles.countryName}>United States</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>9</Text>
              <Text style={styles.countryName}>Malaysia</Text>
            </View>
            <View style={styles.countryItem}>
              <Text style={styles.countryRank}>10</Text>
              <Text style={styles.countryName}>Indonesia</Text>
            </View>
          </View>
        </View>

        <View style={styles.spacer} />
      </ScrollView>
      </View>
    </NoodleBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a0033",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#FF1493",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#FF1493",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  titleContainer: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#FF1493",
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#FF1493",
    textShadowColor: "#8A2BE2",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFD700",
    marginTop: 5,
    fontWeight: "600",
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 25,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 15,
    letterSpacing: 1,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#8A2BE2",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 15,
  },
  settingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  settingSubtext: {
    fontSize: 14,
    color: "#FFD700",
    marginTop: 2,
  },
  aboutSection: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8A2BE2",
  },
  retro85Container: {
    marginBottom: 20,
    alignItems: "center",
  },
  gradientBorder: {
    padding: 8,
    borderRadius: 30,
    shadowColor: "#FF00FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 20,
  },
  retro85Inner: {
    backgroundColor: "#000",
    paddingVertical: 35,
    paddingHorizontal: 45,
    borderRadius: 25,
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#FF00FF",
  },
  appNameText: {
    fontSize: 42,
    fontWeight: "900",
    color: "#FFF",
    letterSpacing: 4,
    textAlign: "center",
    textShadowColor: "#FF00FF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 30,
    marginBottom: 18,
  },
  neonLines: {
    flexDirection: "row",
    gap: 12,
    marginTop: 25,
  },
  neonLine: {
    width: 90,
    height: 6,
    shadowColor: "#FFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 12,
  },
  aboutText: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 20,
    textAlign: "center",
  },
  privacyContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  privacyTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#FF1493",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    textShadowColor: "#8A2BE2",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  privacyDate: {
    fontSize: 14,
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 30,
    fontStyle: "italic",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginTop: 25,
    marginBottom: 15,
    letterSpacing: 1,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF1493",
    marginTop: 15,
    marginBottom: 10,
  },
  privacyText: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 22,
    marginBottom: 15,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#8A2BE2",
  },
  backIcon: {
    transform: [{ rotate: '180deg' }],
  },
  spacer: {
    height: 50,
  },
  addressContainer: {
    flex: 1,
  },
  historySection: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8A2BE2",
  },
  historyText: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 22,
    textAlign: "left",
  },
  countryList: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8A2BE2",
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(138, 43, 226, 0.3)",
  },
  countryRank: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF1493",
    width: 35,
  },
  countryName: {
    fontSize: 16,
    color: "#FFD700",
    fontWeight: "600",
  },
  disclosureSection: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FF1493",
  },
  disclosureText: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 22,
    textAlign: "center",
  },
});