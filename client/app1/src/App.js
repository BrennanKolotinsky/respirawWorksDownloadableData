import DataFileTable from './data-file-table';
import UploadFile from './upload-file';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1 style={{ display: "none" }}>Brennan Kolotinsky</h1>
      <BrowserRouter>
        <Switch>
          
          <Route path="/upload-file">
            <UploadFile />
          </Route>

          <Route path="/">
            <DataFileTable />
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}
