import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const pxToDp = (px) => px * (width / 390);
const styles = StyleSheet.create ({

container: {
    flex: 1,
    backgroundColor: '#F5E4C3',
    padding: pxToDp(20),
    justifyContent: 'center',
    alignItems: 'center'
  },
primaryText:{
    width: pxToDp(350),
    height: pxToDp(150),
    color: '#000',
    textAlign: 'center', 
    fontFamily: 'Quicksand_700Bold',
    fontSize: pxToDp(40),
    marginVertical: pxToDp(30),
    alignItems: 'center',
    justifyContent: 'center'
},
secondaryText:{
  width: '100%',
  color: '#000',
  textAlign: 'center',
  fontFamily: 'Quicksand_400Regular',
  fontSize: pxToDp(18),
  marginBottom: pxToDp(10),
},
topLeaf:{
  width: 200,
  height: 200,
  transform: [{ rotate: '91.171deg' }],
  top: -3,
  left: -14,
  position: 'absolute',
  resizeMode: 'contain'
},
bottomLeaf:{
  width: 200,
  height: 200,
  transform: [{ rotate: '91.171deg' }, {scaleY: -1}, {scaleX: -1}],
  bottom: -3,
  right: -14,
  position: 'absolute',
  resizeMode: 'contain'
},
input:{
  width: '100%',
  height: 50,
  backgroundColor: '#fff',
  borderRadius: 15,
  paddingLeft: 15,
  fontSize: 16,
  marginBottom: 15,
  borderWidth: 1,
  borderColor: '#ccc',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: pxToDp(10),
  elevation: 10,
  shadowOffset: { width: 0, height: pxToDp(2) }
},
buttonContainer:{
  width: '100%',
  alignItems: 'center',
  marginTop: pxToDp(30), 
  paddingBottom: pxToDp(20)
},
button: {
  width: pxToDp(280),
  height: pxToDp(60),
  borderRadius: pxToDp(20),
  backgroundColor: '#2E4A32',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: pxToDp(10),
  elevation: 10,
  shadowOffset: { width: 0, height: pxToDp(2) },
  overflow: 'hidden'
},
textButton: {
  color: 'white',
  fontFamily: 'Quicksand_700Bold',
  fontSize: 21
  },
orange: {
    width: pxToDp(150), 
    height: pxToDp(150),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: pxToDp(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: pxToDp(4) },
    shadowOpacity: 0.2,
    shadowRadius: pxToDp(10),
    elevation: 5, 
    
  },
orangeContainer: {
  alignItems: 'center',
  justifyContent: 'center'
},
Divider: {
        width: '80%',
        height: pxToDp(1),
        backgroundColor: '#000',
        alignSelf: 'center',
        marginVertical: pxToDp(20)
      },
});
export default styles;