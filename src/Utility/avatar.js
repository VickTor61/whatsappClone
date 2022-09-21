function stringToColor(avatarName) {
    if(avatarName) {
    let hash = 0;
    let i;

    for (i = 0; i < avatarName.length; i += 1) {
      hash = avatarName.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}
  }

  function stringAvatar(name) {
    if (name) {
    const bgColor = stringToColor(name);
    try {
      return {
        sx: {
          bgcolor: bgColor,
        },
        children:
          name.split(" ").length >= 2
            ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
            : `${name.split(" ")[0][0]}`,
      };
    } catch (e) {
      console.log("error", e);
    }
}
  }

  export default stringAvatar