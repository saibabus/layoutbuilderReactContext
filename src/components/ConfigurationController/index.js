// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowContent,
      } = value

      const oncontentchange = event => {
        onToggleShowContent(event.target.checked)
      }
      const onLeftchange = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }
      const onRightchange = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <nav className="controlCon">
          <h1 className="heading-control">Layout</h1>
          <div className="listofcheckbox-con">
            <div className="eachCheckbox">
              <input
                type="checkbox"
                value="Content"
                checked={showContent}
                id="Content"
                className="checkBoxstyle"
                onChange={oncontentchange}
              />
              <label className="label" htmlFor="Content">
                Content
              </label>
            </div>
            <div className="eachCheckbox">
              <input
                type="checkbox"
                value="Left Navbar"
                checked={showLeftNavbar}
                id="LeftBar"
                className="checkBoxstyle"
                onChange={onLeftchange}
              />
              <label className="label" htmlFor="LeftBar">
                Left Navbar
              </label>
            </div>
            <div className="eachCheckbox">
              <input
                type="checkbox"
                checked={showRightNavbar}
                value="Right Navbar"
                id="RightBar"
                className="checkBoxstyle"
                onChange={onRightchange}
              />
              <label className="label" htmlFor="RightBar">
                Right Navbar
              </label>
            </div>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
