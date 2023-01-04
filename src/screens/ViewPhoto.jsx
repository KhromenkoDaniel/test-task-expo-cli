import React from 'react';
import {ActivityIndicator, Image, View} from "react-native";

const ViewPhoto = (props) => {
    const {itemData} = props.route.params;
    const [loading, setLoading] = React.useState(false);

React.useEffect(() => {
    props.navigation.setOptions({title: itemData?.alt_description ? itemData?.alt_description.slice(0,25) + '...' :'No description'});
}, []);
    const handleLoad = () => {
        setLoading(prevState => !prevState);
    }

    return (
        <View className="flex justify-center items-center h-full">
            {
                loading ?
                <ActivityIndicator
                    visible={true}
                    textContent={'Loading...'}

                    className="absolute top-1/2 left-1/2"
                /> : null
            }
            <Image onLoadStart={handleLoad} onLoadEnd={handleLoad} source={{uri: itemData?.urls?.full}} style={{width: '100%', height: '100%'}}/>
        </View>
    );
};

export default ViewPhoto;
