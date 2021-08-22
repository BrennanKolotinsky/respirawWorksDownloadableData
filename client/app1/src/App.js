import DataFileTable from './data-file-table/index.jsx'
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          
          <Route path="/upload-file">
            <h2>Select a File to Upload</h2>
          </Route>

          <Route path="/">
            <DataFileTable />
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}
