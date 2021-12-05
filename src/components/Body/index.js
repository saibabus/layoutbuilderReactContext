// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-con">
          {showLeftNavbar && (
            <div className="leftnavbarCon">
              <h1 className="leftNavbar">Left Navbar Menu</h1>
              <ul className="menuList">
                <li className="eachlist">Item 1</li>
                <li className="eachlist">Item 2</li>
                <li className="eachlist">Item 3</li>
                <li className="eachlist">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="contentCont">
              <h1 className="leftNavbar">Content</h1>
              <p className="para-content">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit. sed to
                eiusmod tempor incididunt ut labor et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="leftnavbarCon">
              <h1 className="leftNavbar">Right Navbar Menu</h1>
              <div className="addsCont">
                <div className="addcon">Ad 1</div>
                <div className="addcon">Ad 2</div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
