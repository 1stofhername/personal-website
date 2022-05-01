import postgresIcon from '../assets/icons/postgresql.svg';
import javaScript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import css from '../assets/icons/css3.svg';
import ruby from '../assets/icons/ruby.svg';

export default function SuperPowers () {
    return (
<div id="super-powers-container">
                <h2 className="sub-title-2">SUPERPOWERS</h2>
                <div className="skill-container">
                    <div id="js-container" className="skill-icon"><img id="javascript" src={javaScript} />JavaScript</div>
                    <div id="react-container" className="skill-icon"><img id="react" src={react} />React.js</div>
                    <div id="typescript-container" className="skill-icon"><img id="typescript" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDUgNCBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNCA1IEwgNCA0NSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNSA0NiBMIDQ1IDQ2IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCA0NiA0NSBMIDQ2IDUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDQ1IDQgTCA1IDQgeiBNIDYgNiBMIDQ0IDYgTCA0NCA0NCBMIDYgNDQgTCA2IDYgeiBNIDE1IDIzIEwgMTUgMjYuNDQ1MzEyIEwgMjAgMjYuNDQ1MzEyIEwgMjAgNDIgTCAyNCA0MiBMIDI0IDI2LjQ0NTMxMiBMIDI5IDI2LjQ0NTMxMiBMIDI5IDIzIEwgMTUgMjMgeiBNIDM2LjY5MTQwNiAyMy4wMDk3NjYgQyAzMy41NzY3ODIgMjIuOTk3MzY5IDMwLjAxNzU3OCAyMy45NDEyMTkgMzAuMDE3NTc4IDI4LjMyNDIxOSBDIDMwLjAxNzU3OCAzNC4wNTQyMTkgMzcuNzM4MjgxIDM0LjA1NTYyNSAzNy43MzgyODEgMzYuNjQwNjI1IEMgMzcuNzM4MjgxIDM2Ljg4NTYyNSAzNy44NDIxODcgMzguNjY2MDE2IDM1LjExNzE4OCAzOC42NjYwMTYgQyAzMi4zOTIxODcgMzguNjY2MDE2IDMwLjEyMTA5NCAzNi45NTMxMjUgMzAuMTIxMDk0IDM2Ljk1MzEyNSBMIDMwLjEyMTA5NCA0MS4xMTEzMjggQyAzMC4xMjEwOTQgNDEuMTExMzI4IDQyLjAwMTk1MyA0NC45NTQwNjIgNDIuMDAxOTUzIDM2LjI4OTA2MiBDIDQyLjAwMDk1MyAzMC42NjQwNjMgMzQuMjA4OTg0IDMwLjk0NTM5MSAzNC4yMDg5ODQgMjguMTUwMzkxIEMgMzQuMjA4OTg0IDI3LjA2NzM5MSAzNC45NzgzNzUgMjYuMDU0Njg3IDM3LjEwOTM3NSAyNi4wNTQ2ODggQyAzOS4yNDAzNzUgMjYuMDU0Njg4IDQxLjEyNjk1MyAyNy4zMTI1IDQxLjEyNjk1MyAyNy4zMTI1IEwgNDEuMjY3NTc4IDIzLjYwNzQyMiBDIDQxLjI2NzU3OCAyMy42MDc0MjIgMzkuMTEzODkyIDIzLjAxOTQwOCAzNi42OTE0MDYgMjMuMDA5NzY2IHoiPjwvcGF0aD48L3N2Zz4="/>TypeScript</div>
                    <div id="postgres-container" className="skill-icon"><img id="postgres" src={postgresIcon}/>PostgreSQL</div>
                    <div id="ruby-container" className="skill-icon"><img id="ruby" src={ruby}/>Ruby</div>
                    <div id="css-container" className="skill-icon"><img id="css" src={css}/>CSS</div>
                    {/* <div id="rest-container"><img className="skill-icon" id="rest" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMjZlMDdmOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjMWZiMTQxIj48cGF0aCBkPSJNMjEuNSwyMS41djEyOWg2NC41di0zMi4yNXYtNjQuNXYtMzIuMjV6TTg2LDUzLjc1YzAsMTcuNzgwNSAxNC40Njk1LDMyLjI1IDMyLjI1LDMyLjI1YzE3Ljc4MDUsMCAzMi4yNSwtMTQuNDY5NSAzMi4yNSwtMzIuMjVjMCwtMTcuNzgwNSAtMTQuNDY5NSwtMzIuMjUgLTMyLjI1LC0zMi4yNWMtMTcuNzgwNSwwIC0zMi4yNSwxNC40Njk1IC0zMi4yNSwzMi4yNXpNMTE4LjI1LDg2Yy0xNy43ODA1LDAgLTMyLjI1LDE0LjQ2OTUgLTMyLjI1LDMyLjI1YzAsMTcuNzgwNSAxNC40Njk1LDMyLjI1IDMyLjI1LDMyLjI1YzE3Ljc4MDUsMCAzMi4yNSwtMTQuNDY5NSAzMi4yNSwtMzIuMjVjMCwtMTcuNzgwNSAtMTQuNDY5NSwtMzIuMjUgLTMyLjI1LC0zMi4yNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>REST</div> */}
                </div>
            </div>
    )
}