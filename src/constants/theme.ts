import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const images={
}

const colors = {
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
    title:16
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
}

export { images, colors, sizes, fonts, fontnames};