import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const images={
    home:require('../../assets/images/home.png'),
    homes:require('../../assets/images/homes.png'),
    cart:require('../../assets/images/cart.png'),
    carts:require('../../assets/images/carts.png'),
    user:require('../../assets/images/user.png'),
    users:require('../../assets/images/users.png'),
    cake:require('../../assets/images/cake.png'),
    hat:require('../../assets/images/hat.png'),
    job:require('../../assets/images/job.png'),
    location:require('../../assets/images/location.png'),
    phone:require('../../assets/images/phone.png'),
    sex:require('../../assets/images/sex.png'),
    sexf:require('../../assets/images/sexf.png'),
    sext:require('../../assets/images/sext.png'),
    work:require('../../assets/images/work.png'),
    back:require('../../assets/images/back.png'),
    next:require('../../assets/images/next.png'),
    star:require('../../assets/images/star.png'),
    starf:require('../../assets/images/starf.png'),
    logo:require('../../assets/images/logo.png'),
}

const colors = {
    transparent: "#1a181800",
    grey: "#91919F",
    greyop: "#91919F60",
    white: "#FFFFFF",
    purple:'#8770ad',
    red:'#FF0000'
}

const sizes = {
    width: width,
    height: height,
    wpoints: width / 100,
    hpoints: height/100,
    h1:30,
    normal:14,
    title:16,
    big:40
}

const fontnames = {
    poppins: "Poppins",
    poppinsBold: "PoppinsBold"
};

const fonts = {
    h1: {
        fontFamily: fontnames.poppins,
        fontSize: sizes.h1,
        color: colors.grey,
    },
    title: {
        fontFamily: fontnames.poppins,
        fontSize: sizes.title,
        color: colors.grey,
    },
    normal: {
        fontFamily: fontnames.poppins,
        fontSize: sizes.normal,
        color: colors.grey,
    },
    normalb: {
        fontFamily: fontnames.poppinsBold,
        fontSize: sizes.normal,
        color: colors.grey,
    },
    big: {
        fontFamily: fontnames.poppins,
        fontSize: sizes.big,
        color: colors.grey,
    },
}

export { images, colors, sizes, fonts, fontnames};