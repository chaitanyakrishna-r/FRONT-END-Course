 
//  const FeaturedflagEnableObject = null;
const FeaturedflagEnableObject = {
  showLightDarkMode : true,
  showAccordion : true,
  showRandomColor : true,
  showTicTacToe : true,
  showTreeView : true,
  showStarRating : true,

}

export default function FeaturedflagAPICall(){
    return new Promise((resolve, rejecet)=>{
        if(FeaturedflagEnableObject){
          setTimeout(()=>{
            resolve(FeaturedflagEnableObject);
          },5000) 
        }else{
            rejecet("no data found");
        }
    })
}