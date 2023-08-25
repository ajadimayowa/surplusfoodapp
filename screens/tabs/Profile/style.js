import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../assets/constants/colors";

export const styles = ScaledSheet.create({
    imageCircler: {
        width: '100@msr',
        height: '100@msr',
        borderRadius: '100@msr',
        borderWidth: '5@msr',
        borderColor: colors.primary,
        backgroundColor: colors.white
    },
    displayName: {
        fontSize: '25@msr',
        textTransform: 'capitalize',
        fontFamily: 'montserratSemiBold',
        color: colors.primary
    }
})
