export const getFontIcon = function (type) {
  switch (type) {
    case 'success':
      return 'start-icon far fa-check-circle faa-tada animated';
    case 'warning':
      return 'start-icon fa fa-exclamation-triangle faa-flash animated';
    case 'info':
      return 'start-icon  fa fa-info-circle faa-shake animated';
    case 'alert':
      return 'start-icon far fa-times-circle faa-pulse animated';
    case 'kudos':
      return 'start-icon fa fa-thumbs-up faa-bounce animated';
    default:
      return 'start-icon  fa fa-info-circle faa-shake animated';
  }
};
