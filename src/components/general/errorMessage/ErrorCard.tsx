import {Animated, Text} from "react-native";
import {useEffect, useRef} from "react";
import {themeColors} from "../../../styles/theme";
import {Button} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type ErrorCardProps = {
    errorMessage: string,
    style?: {}
}

const ErrorCard = ({errorMessage, style = {}}: ErrorCardProps) => {
    const slideIn = useRef(new Animated.Value(-900)).current;

    useEffect(() => {
        Animated.timing(slideIn, {
            toValue: -50,
            duration: 250,
            useNativeDriver: true
        }).start()
    }, [slideIn]);

    return <>
        <Animated.View style={[{
            backgroundColor: themeColors.red500,
            padding: 50,
            alignItems: "center",
            justifyContent: "center",
            transform: [{translateY: slideIn}],
            borderRadius: 20,
            position: "relative"
        }, style]}>
            <Button style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 50,
                height: 50
            }}>
                <MaterialCommunityIcons name={"close"} size={20} color={themeColors.gray100}/>
            </Button>
            <Text style={{color: themeColors.gray100, fontWeight: "bold"}}>
                {errorMessage}
            </Text>
        </Animated.View>
    </>
}

export default ErrorCard;