// src/translation/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      username: "Username",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      language: "Language",
      save: "Save",
      changeCoverImage: "Change Cover Image",
      changeProfileImage: "Change Profile Image",
      uploadSuccess: "Upload done!",
      uploadError: "Upload error: ",
      done: "Done!",
      notification_img_message: "Hi from img!",
      alt_cover_image: "Cover Image",
      alt_profile_image: "Profile Image",
      profile: "Profile",
      game: "Game",
      security: "Security",
      securitySettings: "Security settings",
      loginWithGoogle: "Login with Google",
      searchPlaceholder: "Search",
    },
  },
  fr: {
    translation: {
      username: "Nom d'utilisateur",
      firstName: "Prénom",
      lastName: "Nom de famille",
      email: "Email",
      language: "Langue",
      save: "Sauvegarder",
      changeCoverImage: "Changer l'image de couverture",
      changeProfileImage: "Changer l'image de profil",
      uploadSuccess: "Téléchargement terminé !",
      uploadError: "Erreur de téléchargement : ",
      done: "Terminé !",
      notification_img_message: "Salut de l'image !",
      alt_cover_image: "Image de couverture",
      alt_profile_image: "Image de profil",
      profile: "Profil",
      game: "Jeu",
      security: "Sécurité",
      securitySettings: "Paramètres de sécurité",
      loginWithGoogle: "Connexion avec Google",
      Search: "Search...",
      searchPlaceholder: "Rechercher",
    },
  },
  ar: {
    translation: {
      username: "اسم المستخدم",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      language: "اللغة",
      save: "حفظ",
      changeCoverImage: "تغيير صورة الغلاف",
      changeProfileImage: "تغيير صورة الملف الشخصي",
      uploadSuccess: "تم الرفع!",
      uploadError: "خطأ في الرفع: ",
      done: "تم!",
      notification_img_message: "مرحباً من الصورة!",
      alt_cover_image: "صورة الغلاف",
      alt_profile_image: "صورة الملف الشخصي",
      profile: "الملف الشخصي",
      game: "اللعبة",
      security: "الأمان",
      securitySettings: "إعدادات الأمان",
      loginWithGoogle: "تسجيل الدخول بواسطة جوجل",
      searchPlaceholder: "ابحث",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
