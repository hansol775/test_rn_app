import React, {Component} from 'react';
import { Button, View } from 'react-native';
import { observer, inject } from 'mobx-react';


@inject('userStore')
@observer
export default class SplashScreen extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    onPress={() => this.props.navigation.navigate('Drawer')}
                    title="Main으로 이동"
                />
                <Button
                    onPress={() => this.props.userStore.userNameChange('정기열')}
                    title={this.props.userStore.user_name}
                />
            </View>
        )
    }
}
