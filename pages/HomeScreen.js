import React from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator, AsyncStorage } from 'react-native';
import User from '../User';
import Mybutton from './components/Mybutton'
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      showME: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 100)
  }

  state = {
    users: []
  }

  render() {

    let lamom = {
      uri: 'http://thep-center.org/upload02/fried_rice/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%97%E0%B8%B5%E0%B9%88%201%20%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%88%E0%B8%B5%E0%B8%99.jpg'
    };

    
    let Somjai = {
      uri: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/65459081_2361108093954895_4595494056145977344_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_eui2=AeF8X4tlqov1gcTRQ_-vBzuZcrTAIN30f41ytMAg3fR_je9I4roaQp0NUHrSMRm9edJtvSnWewtZ5hiODKzvG84m&_nc_ohc=II8ZgDaM1XAAX-glbPe&_nc_ht=scontent.fbkk10-1.fna&oh=d706f1443c1d6e3b38a91981b1093b3b&oe=5F61584B'
    };
    




    
    return (

      <ScrollView>
      <View style={{ flex: 1}}>
        {
          this.state.showME ?
            <ActivityIndicator size="large" color="#ff0000" />

            :

            <View>
              <Text style={{ marginTop: 50, fontSize: 40, textAlign: 'center' }}>WU Delivery</Text>
              <Text style={{ fontSize: 30, textAlign: 'center', paddingBottom: 20 }}>สวัสดีคุณ {User.phone}</Text>
              <Text style={{ fontSize: 25, textAlign: 'left', paddingBottom: 20 }}>เมนูแนะนำ</Text>

              <Text style={{ fontSize: 30, textAlign: 'left', paddingBottom: 20 }}>ร้านสมใจ</Text>
              <Image source={lamom} style={{ width: 420, height: 300, justifyContent: 'center' }} />
              <Text style={{ fontSize: 30, textAlign: 'left', paddingBottom: 40 }}>    ข้าวผัดรวมมิตร : 40 บาท</Text>
                 <Mybutton
             title="     Buy     "
             customclick={() => navigator.navigate('Buy')}
            />
            


<Text style={{ fontSize: 30, textAlign: 'left', paddingBottom: 20 }}>ร้านป้าละม่อม</Text>
              <Image source={lamom} style={{ width: 420, height: 300, justifyContent: 'center' }} />
              <Text style={{ fontSize: 30, textAlign: 'left', paddingBottom: 20 }}>          ข้าวผัดกุ้ง : 40 บาท</Text>
              
              <Mybutton
             title="     Buy     "
             customclick={() => navigator.navigate('Buy')}
            />
              

            </View>
        }
      </View>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});


/*
let pic = {
  uri: 'https://www.img.in.th/images/f8e5ebe9cded5c57c7de4cc8b4bacc86.png'
};

<Image source={pic} style={{ width: 250, height: 250, justifyContent: 'center' }} />

            <Mybutton
             title="ฟังเพลง"
            customClick={() => this.props.navigation.navigate('Web')}
            />

*/
//<Image source={pic} style={{width: 300, height: 300}}/>