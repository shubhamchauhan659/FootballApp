# FootballApp
The app is developed in React Native Framework using React Native Cli

A backend is created on Firebase whose link is used in code of result screen to load data of clubs in different states.


We are using Firebase database where we created our own database after taking data of football clubs in india from wikkipidea.The list of football clubs In India canbe found at "https://en.wikipedia.org/wiki/List_of_football_clubs_in_India".

follow the steps to run these files on your pc :
step 1-get React-Native installation completed on your PC.
step 2-Clone FootballApp repository from gihub
step 3-install yarn(after this you are ready to run)
step 4-react-native run-android

*)The landing page will consist of a dropdown/select menu, at the top, containing all
the Indian state names in lexicographical order ( Karnataka, Maharashtra, Tamil
Nadu, etc…)

*)When the user selects a state,then we fetched football clubs for the selected state along with its more data from firebase.

*)There is a like icon next to each club along with the number of likes. The user can tap/click on the like icon and the count will increase by 1. This is updated in the backend as well. The user can tap as many times as he wants.

*)You can only fetch at max 10 football clubs at once and when you scroll it to bottom it load further clubs automatically.

