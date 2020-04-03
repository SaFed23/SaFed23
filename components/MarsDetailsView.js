import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

class MarsDetailsView extends React.Component {
    render() {
        return (
            <View style={{alignItems: "center"}}>
                <Text style={styles.textOfDateOfPhoto}>
                    Date of photo: {this.props.marsPicture.earth_date}
                </Text>
                <Image
                    style={styles.image}
                    source={{uri: this.props.marsPicture.img_src}}
                />
                <Text style={styles.textOfNameOfCamera}>
                    Name of camera: {this.props.marsPicture.camera.full_name}
                </Text>
                <Text style={styles.textOfDateOfPhoto}>
                    Robot info
                </Text>
                <Text style={styles.textOfNameOfCamera}>
                    - Launch date: {this.props.marsPicture.rover.launch_date}
                </Text>
                <Text style={styles.textOfNameOfCamera}>
                    - Landing date: {this.props.marsPicture.rover.landing_date}
                </Text>
                <Text style={styles.textOfNameOfCamera}>
                    - Status: {this.props.marsPicture.rover.status}
                </Text>
                <Text style={styles.textOfNameOfCamera}>
                    - Count of photos: {this.props.marsPicture.rover.total_photos}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
        margin: "1%",
        borderRadius: 5
    },
    textOfDateOfPhoto: {
        marginTop: "5%",
        fontSize: 20,
        fontWeight: "bold"
    },
    textOfNameOfCamera: {
        fontSize: 15,
        fontWeight: "bold"
    }
});

export default MarsDetailsView;