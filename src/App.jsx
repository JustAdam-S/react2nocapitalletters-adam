import Patient from './components/Patient';
import Department from './components/Department';
const App = () => {
return(
  <>
    <div className="app">
      <Patient name="Adam" age="21">
        <Department department="xray" doctor="Dr Jekyll" nurse="Somebody"/>
        </Patient>
      </div>
    </>
  );
}
export default App;