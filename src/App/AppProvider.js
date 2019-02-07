import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
         constructor(props) {
           super(props);
           this.state = {
             pageName: "Stage 1",
             stages: [],
             stage:{},
             setPageName: this.setPageName,
             setStage: this.setStage,
             setStageAndName: this.setStageAndName
           };
         }

         componentDidMount = () => {
           this.fetchSchedule();
           console.log(this.items);
         };

         fetchSchedule = () => {
           fetch(
             "https://api.overwatchleague.com/schedule?expand=team.content&locale=en_US&season=2019"
           )
             .then(res => res.json())
             .then(json => {
               this.setState({ stages: json.data.stages });
             });
         };

         setPageName = pageName => this.setState({ pageName });
         setStage = stage => this.setState({ stage });
         setStageAndName = (stage) =>{
            this.setStage({stage})
            this.setState({pageName:stage.name})
         }

         render() {
           return (
             <AppContext.Provider value={this.state}>
               {this.props.children}
             </AppContext.Provider>
           );
         }
       }
