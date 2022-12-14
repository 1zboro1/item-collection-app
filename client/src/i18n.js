import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          recentItems: "Recent items",
          biggestColl: "Biggest collections",
          collections: "Collections",
          search: "Search...",
          home: "HOME",
          login: "LOGIN",
          register: "REGISTER",
          adminPage: "ADMIN PAGE",
          myColl: "MY COLLECTIONS",
          collPage: "COLLECTION PAGE",
          itemPage: "ITEM PAGE",
          itemIndexTitle: "Item Name",
          itemIndexCollName: "Collection: ",
          itemIndexAuthor: "Author: ",
          colIndexName: "Collection Name",
          colIndexType: "Type: ",
          type: "Type...",
          signInHeader: "Sign-in to your account",
          password: "Password",
          username: "Username",
          loginButton: "LOGIN",
          loginToRegisterLink: "Click here to register",
          registerHeader: "Register account",
          registerButton: "REGISTER",
          registerToLoginLink: "Already have an account? Sign-in here",
          administrationHeader: "Administration",
          tableManage: "Manage",
          tableOverview: "Overview",
          tableBlock: "Block",
          tableUnblock: "Unblock",
          tableGiveAdmin: "Give Admin",
          tableRevokeAdmin: "Revoke Admin",
          tableDelete: "Delete",
          myCollHeader: "My Collections",
          addCollButton: "ADD COLLECTION",
          tags: "Tags: ",
          name: "Name...",
          tagsV2: "Tags...",
          addItemButton: "ADD ITEM",
          description: "Description...",
          uploadCollText: "Upload collection picture",
          uploadItemText: "Upload item picture",
          uploadButton: "Upload",
          createNowButton: "CREATE NOW",
          addNowButton: "ADD NOW",
          createCollHeader: "Create new collection",
          addItemHeader: "Add new item",
          pageNotFound: "Ups... page not found",
          image: "Image",
          edit: "Edit",
          logoutButton: "LOGOUT",
          adminCollPriv: "Manage Collection as Admin",
          editCollHeader: "Edit Collection",
          editNowButton: "APPLY CHANGES",
        },
      },
      pl: {
        translation: {
          recentItems: "Ostatnie przedmioty",
          biggestColl: "Największe kolekcje",
          collections: "Kolekcje",
          search: "Szukaj...",
          home: "STRONA DOMOWA",
          login: "ZALOGUJ SIĘ",
          register: "ZAREJESTRUJ SIĘ",
          adminPage: "STRONA ADMINA",
          myColl: "MOJE KOLEKCJE",
          collPage: "STRONA KOLEKCJI",
          itemPage: "STRONA PRZEDMIOTU",
          itemIndexTitle: "Nazwa przedmiotu",
          itemIndexCollName: "Kolekcja: ",
          itemIndexAuthor: "Autor: ",
          colIndexName: "Nazwa Kolekcji",
          colIndexType: "Typ: ",
          type: "Typ...",
          signInHeader: "Zaloguj się do swojego konta",
          password: "Hasło",
          username: "Nazwa użytkownika",
          loginButton: "ZALOGUJ",
          loginToRegisterLink: "Kliknij tutaj, aby się zarejestrować",
          registerHeader: "Zarejestruj konto",
          registerButton: "ZAREJESTRUJ",
          registerToLoginLink: "Masz już konto? Zaloguj się tutaj",
          administrationHeader: "Administracja",
          tableManage: "Zarządzaj",
          tableOverview: "Podgląd",
          tableBlock: "Zablokuj",
          tableUnblock: "Odblokuj",
          tableGiveAdmin: "Daj Admina",
          tableRevokeAdmin: "Zabierz Admina",
          tableDelete: "Usuń",
          myCollHeader: "Moje kolekcje",
          addCollButton: "DODAJ KOLEKCJĘ",
          tags: "Tagi: ",
          name: "Nazwa...",
          tagsV2: "Tagi...",
          addItemButton: "DODAJ PRZEDMIOT",
          description: "Opis...",
          uploadCollText: "Prześlij zdjęcie kolekcji",
          uploadItemText: "Prześlij zdjęcie przedmiotu",
          uploadButton: "Prześlij",
          createNowButton: "STWÓRZ TERAZ",
          addNowButton: "DODAJ TERAZ",
          createCollHeader: "Stwórz nową kolekcję",
          addItemHeader: "Dodaj nowy przedmiot",
          pageNotFound: "Ups... nie znaleziono strony",
          image: "Zdjęcie",
          edit: "Edytuj",
          logoutButton: "WYLOGUJ SIĘ",
          adminCollPriv: "Zarządzaj Kolekcją jako Admin",
          editCollHeader: "Edytuj kolekcję",
          editNowButton: "ZATWIERDŹ ZMIANY",
        },
      },
    },
  });
