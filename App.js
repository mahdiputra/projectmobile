import React, {Component} from 'react';
import {Modal,Platform,TouchableHighlight, Picker,StatusBar,FlatList,ScrollView,Slider,TextInput, StyleSheet,Alert, View,ActivityIndicator,Image,Button} from 'react-native';
// import Header from './komponen/Header'

import Footer from './komponen/Footer'

import {Text,Avatar,Header,Button} from 'react-native-elements'


var kalimat = 'Halo Dunia1'


class App extends Component{
  kliki=()=>{}

  state = {
    ModalVisible: false
  };
  
  setModal(visible){
    this.setState({ModalVisible:visible})
  }

  constructor(){
    super()
    this.kata1 = ' dodol'
    this.state = {opsi:'',
    nama:'Andi', usia: 21,x:'andi',z:0,input:'teks',input2:'2'}
  }

  kata(x){return x;}


  render(){
    function kata2(x){return x}
    function klik(){}

    const siswa = ['andi','budi','caca']
    const listsiswa = siswa.map((siswa,index)=> <Text key={index}> {siswa} </Text>)
   
    function klik2(){
      console.log('tombol diklik')
    }
    
    function klik3(){
      Alert.alert('Tombol diklik')
    }

    return(


      
      <ScrollView>
        
        {/* <Header backgroundColor={'#6be59c'} leftComponent={{icon:'menu',color:'white'}}/> */}
        {/* <Icon name='g-translate' color='blue' size={30}/>
        <Icon name='android' color='green' reverse/>
        <Icon name="verified-user" color='blue' raised/> */}
      



        <Avatar xlarge rounded source={{uri:"https://www.kepogaul.com/wp-content/uploads/2018/01/000089-03_gambar-lucu-bikin-ngakak_sama-siapa_533x533_ccpdm-min.jpg?x52180"}} onPress={()=>{}} activeOpacity={0.7}/>



        <Text h1> Heading 1 </Text>
        <Text h2> Heading 2 </Text>
        <Text h3> Heading 3 </Text>
        <Text h4> Heading 4 </Text>


      <TouchableHighlight style={StyleSheet.button} onPress={this.kliki}><Text> klik ini </Text></TouchableHighlight>
      <View>

        {/* <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={()=>{}}>
          <View style={{marginTop: 22}}>
            <Text style={{fontSize:30,margin:50}}>
              ini modal.</Text>
            <Button title='Tutup Modal' onPress={()=>{
              this.setModal(!this.state.modalVisible)
            }}/>
          </View>
        </Modal> */}


      <StatusBar backgroundColor="blue" barStyle='light-content' placeholder="bijikucing"/>
      <Picker selectedValue ={this.state.opsi} style={{height:50,width:200}} onValueChange={(val,i)=> this.setState({opsi: val})}>
      <Picker.Item label='nasi goreng' value='1'/>
      <Picker.Item label="Nasi uduk" value='2'/>
      <Picker.Item label="Nasi gudeg" value='3'/>
      </Picker>
    <FlatList data={[{key:'andi'},{key:'budi'},{key:'Caca'}]} renderItem={({item}) => <Text>{item.key}</Text>}/>



        <TextInput style={{height: 40}} placeholder='ketik di sini' onChangeText={(input)=> this.setState({input})}/>
        <TextInput style={{height: 40}} placeholder='ketik di sini' />
        <Button onPress={()=>this.setState({input2:this.state.input})} title="klik tombol" color="purple" />

        

        <Slider maximumValue={100} minimumValue={0} step={1} onValueChange={(val)=>{this.setState({z:val})}}/>

        <Text style={{fontSize:30}}>{this.state.x} {this.state.z} {this.state.input} {this.state.input2}</Text>
        <Button onPress={()=>this.setState({x:'Budi'})} title="klik tombol" color="purple" />

         <ActivityIndicator size='large' color="red"/>

         <Button onPress={klik} title='klik tombol' color='purple'/>

         <Image style={{width: 250, height: 250}} source={require('./gambar/download.jpg')}/>

         <Image style={{width: 50, height: 50}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0RWBVgXzEQJYDIWWX8PjhV5R_Iu5yM-KhgHVigqYL_Qui32a'}} />

         <Button onPress={klik} title='klik tombol' color="purple" />

         <Button onPress={klik2} title="klik Tombol" color="yellow" />

        <Button onPress={klik3}  title="klik tombol" color="green"/>
        <Text style={{
          color:'red',
          fontSize:50,
          textAlign:'center',
          padding:25,
          backgroundColor:'blue'
        }}>

          {kalimat}
          {this.kata1}
          PULL {this.kata('out')}
          biji {kata2('kucing')}



          { listsiswa }
          

          {/* <Header/> */}
          <Footer/>

          halo {this.state.nama} ({this.state.usia})
  
         
         
       </Text>
      </View>
      </ScrollView>
    )
  }
}

export default App;
