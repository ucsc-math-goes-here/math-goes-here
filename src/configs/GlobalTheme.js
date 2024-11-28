class GlobalTheme {
    constructor() {
      this.primaryColor = '#303030';
      this.secondaryColor = '#606060';
      this.disabledColor = '#e0e0e0';
      this.cardColor = '#404040';
      this.textColor = '#303030';
      this.displayAreaBorderRadius = 30;
      this.displayAreaPadding = 15;
      this.displayContentBorderRadius = 20;
      this.spacing = 8;
      this.darkMode = false;
  
      this.bigDropShadow = '0px 4px 10px rgba(0, 0, 0, 0.15), 0px 8px 30px rgba(0, 0, 0, 0.2)';
      this.midDropShadow = '0px 3px 7px rgba(0, 0, 0, 0.1), 0px 6px 20px rgba(0, 0, 0, 0.15)';

      this.appBarHeight = 190;
    }
  }
  
  const globalThemeInstance = new GlobalTheme();
  export default globalThemeInstance;