import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const pxToDp = (px) => px * (width / 390);
const styles = StyleSheet.create ({
// global container
container: {
    flex: 1,
    backgroundColor: '#F5E4C3',
    padding: pxToDp(20),
    justifyContent: 'center',
    alignItems: 'center'
  },
// general text
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
// leaf container if i have a scrollable view
leafContainer:{
  flex: 1,
  position: 'absolute',
  width: '100%',
  height: '100%',

},
topScrollLeaf:{
  width: 200,
  height: 200,
  transform: [{ rotate: '91.171deg' }],
  top: -10,
  left: -25,
  position: 'absolute',
  resizeMode: 'contain'
},
bottomScrollLeaf:{
  width: 200,
  height: 200,
  transform: [{ rotate: '91.171deg' }, {scaleY: -1}, {scaleX: -1}],
  bottom: 0,
  right: -1,
  position: 'absolute',
  resizeMode: 'contain'
},
// needed Leaf for general layout
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

// user input
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
//any primary button
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
//Name Screen orange
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
// Divider
Divider: {
        width: '80%',
        height: pxToDp(1),
        backgroundColor: '#000',
        alignSelf: 'center',
        
      },
//leaf + divider
DivLeafContainer:{
   alignItems: 'center',
   position: 'relative',
   marginVertical: pxToDp(16)

},
twoLeafs:{
  position: 'absolute',
  resizeMode: 'contain'
},
//User type Buttons
clientButton:{
  width: pxToDp(280),
  paddingVertical: (10),
  borderRadius: pxToDp(20),
  backgroundColor: '#88A76C',
  alignSelf: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.4,
  shadowRadius: pxToDp(10),
  elevation: 10,
  shadowOffset: { width: 0, height: pxToDp(2) },
  overflow: 'hidden'
},
proButton:{
  width: pxToDp(280),
  paddingVertical: (20),
  borderRadius: pxToDp(20),
  backgroundColor: '#FCCF94',
  alignSelf: 'center',
  marginVertical: pxToDp(30),
  shadowColor: '#000',
  shadowOpacity: 0.4,
  shadowRadius: pxToDp(10),
  elevation: 10,
  shadowOffset: { width: 0, height: pxToDp(2) },
  overflow: 'hidden'
}, 
buttonUserContainer:{
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: pxToDp(8),
  flexShrink: 1,
},
userText:{
  width: '100%',
  color: '#000', 
  fontFamily: 'Quicksand_700Bold',
  fontSize: pxToDp(19),
  flexWrap: 'wrap',
  textAlign: 'center'
  
},
textWrapper:{
  alignItems: 'center',
  justifyContent: 'center',
},
//banana
banana:{
  width: pxToDp(40),
  height: pxToDp(40),
  transform: [{ rotate: '176.64deg' }, {scaleY: -1}],
  
},
//goal screen style 
// option buttons
optionsContainer: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: pxToDp(40)
},

optionButton: {
  width: '80%',
  paddingVertical: pxToDp(15),
  backgroundColor: '#FFFF',
  borderRadius: pxToDp(20),
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: pxToDp(5),
  elevation: 5,
},

selected: {
  backgroundColor: '#88A76C', 
},

optionText: {
  fontSize: pxToDp(18),
  fontFamily: 'Quicksand_400Regular',
  color: '#000',
},
goalText:{
  width: pxToDp(350),
  height: pxToDp(80),
  color: '#000',
  textAlign: 'center', 
  fontFamily: 'Quicksand_700Bold',
  fontSize: pxToDp(20),
  alignItems: 'center',
  justifyContent: 'center'
},
helloText:{
  width: '100%',
  height: pxToDp(100),
  color: '#000',
  textAlign: 'center', 
  fontFamily: 'Quicksand_700Bold',
  fontSize: pxToDp(40),
  marginVertical: pxToDp(30),
  alignItems: 'center',
  justifyContent: 'center'
},
//Setting Profile screen 
genderContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: pxToDp(15)},
genderButton: {
  width: '30%',
  paddingVertical: pxToDp(15),
  backgroundColor: '#FFFF',
  borderRadius: pxToDp(15),
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: pxToDp(5),
  elevation: 5,
},
customGender:{
  marginVertical: pxToDp(15),
},
SwitchContainer:{
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: pxToDp(15),
  overflow: 'hidden',
  backgroundColor: '#F5E4C3',
  height: pxToDp(47),
 
},
switchActiveButton:{

  justifyContent: "center",
  borderWidth:1,
  borderColor: '#4A4459',
  width: '30%',
  paddingVertical: pxToDp(15),
  alignItems: 'center',
  borderTopLeftRadius: pxToDp(25),
  borderBottomLeftRadius: pxToDp(25),
},
switchInactiveButton:{
 
  justifyContent: "center",
  borderWidth: 1,
  borderColor: '#4A4459',
  width: '30%',
  paddingVertical: pxToDp(15),
  alignItems: 'center',

  borderTopRightRadius: pxToDp(25),
  borderBottomRightRadius: pxToDp(25),
},
selectedUnit:{
  backgroundColor: '#2E4A32',
},
optionUnitText: {
  fontSize: pxToDp(12),
  fontFamily: 'Quicksand_600SemiBold',
  color: '#000',
  textAlign: 'center',
  includeFontPadding: false,
},
//scrolable rule 

  rulerContainer: {
    alignItems: "center",
    backgroundColor: "#F5E4C3",
    paddingTop: 50,
    position: "relative",
  },
  selectedValue: {
    fontSize: 32, 
    fontWeight: "bold",
    marginBottom: 10,
  },
  rulerItem: {
    width: 25, //  Increased width for better spacing
    alignItems: "center",
    justifyContent: "flex-end", //  Ensures numbers align properly
  },
  rulerText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5, //  Creates space between text & tick marks
  },
  line: {
    width: 2,
    height: 15,
    backgroundColor: "#ccc",
  },
  activeLine: {
    height: 30, //  Taller line for selected value
    backgroundColor: "black",
  },
  centerIndicator: {
  position: "absolute",
  left: "50%",
  width: 3, //  Slightly thicker for better visibility
  height: 55, //  Increased height to align properly
  backgroundColor: "black",
  transform: [{ translateX: -1.5 }], //  Moves it perfectly to the center
  bottom: -3,
},
//Motivational Screen
// cute apple 
cuteApple:
{width: pxToDp(170  ),
  height: pxToDp(160),
  justifyContent: 'center',
  alignItems: 'center',
  resizeMode: 'contain',
  marginVertical: pxToDp(18),
},
greenText:{
  color: '#4F7B4A',
  marginVertical: pxToDp(60),
  fontWeight: 'Quicksand_700Bold',
},
motivText:{
fontSize: pxToDp(35),
},
// transformationScreen 
optionsTransformationContainer: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: pxToDp(15)},
optionTransformationText: {
    fontSize: pxToDp(16),
    fontFamily: 'Quicksand_500Medium',
    color: '#000',
    textAlign: 'center',
  },
  transformationText:{
    width: pxToDp(350),
    height: pxToDp(150),
    color: '#000',
    textAlign: 'center', 
    fontFamily: 'Quicksand_700Bold',
    fontSize: pxToDp(35),
    alignItems: 'center',
    justifyContent: 'center'
  },
  //TransformationScreen Popup 
  popup:{
    borderRadius: pxToDp(20),
    width: '100%',
    height: '50%',
    backgroundColor: '#88A76C',
    justifyContent: 'center',
    alignItems: 'center',
   },
  smallPear:{
    height: pxToDp(100),
    width: pxToDp(100),
    resizeMode: 'contain',
    marginVertical: pxToDp(20),
  },
  mainText:{
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Quicksand_700Bold',
    fontSize: pxToDp(25),
    marginVertical: pxToDp(20),
  },
  popupSubText:{
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Quicksand_500Meduim',
      fontSize: pxToDp(18),
      marginVertical: pxToDp(20),
  },
  popupContainer:{
    flex: 1,
    justifyContent: 'flex-end',
  }
})
export default styles;