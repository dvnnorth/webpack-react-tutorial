import * as React from 'react';

export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<AppProps, {}> {

  public render() {
    return <h1>Hello world!</h1>;
  }

};