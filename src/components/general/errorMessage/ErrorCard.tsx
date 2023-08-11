import {Animated, Text} from "react-native";
import {useEffect, useRef, useState} from "react";
import {themeColors} from "../../../styles/theme";
import {Button} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useAppDispatch} from "../../../hooks/redux/hooks";
import {showError} from "../../../redux/reducers/errorSlice";

type ErrorCardProps = {
    errorMessage: string,
    style?: {}
}

const ErrorCard = ({errorMessage, style = {}}: ErrorCardProps) => {
    const slideIn = useRef(new Animated.Value(-400)).current;
    const [show, setShow] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        Animated.timing(slideIn, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start();

        const handleErrorShow = () => {
            Animated.timing(slideIn, {
                toValue: -400,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                setShow(false);
                dispatch(showError({showError: false, errorMessage: ''}));
            });
        }

        setTimeout(handleErrorShow, 2750);
    }, [dispatch, slideIn]);

    return <>
        {show &&
            <Animated.View style={[{
                backgroundColor: themeColors.red500,
                padding: 40,
                marginBottom: 10,
                alignItems: "center",
                justifyContent: "center",
                transform: [{translateX: slideIn}],
                borderRadius: 20,
                position: "relative"
            }, style]}>
                <Text style={{color: themeColors.gray100, fontWeight: "bold"}}>
                    {errorMessage}
                </Text>
            </Animated.View>
        }
    </>
}

export default ErrorCard;
