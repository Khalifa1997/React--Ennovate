LandingPage example:

#xd
Adding Fontawesome
```js static
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
```
Button
```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faGrin, faUserFriends } from "@fortawesome/free-solid-svg-icons"
import { faReact, faDocker, faNode, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
;            <FontAwesomeIcon icon={faArrowCircleDown} size="3x" style={{ color: '#3496d8', marginBottom: '30px', }} />

;            <FontAwesomeIcon icon={faGithub} size="6x" style={{ color: '#3496d8', marginBottom: '30px' }} />


```
Button
```jsx 
import './LandingPage.css'

;<button type="button" className="btn btn-light btn-lg" style={{ paddingTop: "3px", marginBottom: "20px", color: "White", backgroundColor: "#3496d8" }}>Join us now!</button>
```
