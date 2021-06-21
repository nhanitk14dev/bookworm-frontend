//https://react-bootstrap.github.io/components/breadcrumb/
import { Component, Fragment } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { withRouter } from 'react-router-dom';

class BreadCrumb extends Component {

  render() {
    let breadcrumb = this.props;

    return (
      <Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href={breadcrumb.path}>
            {breadcrumb.level1}
          </Breadcrumb.Item>
          { breadcrumb.level2 && (
            <Breadcrumb.Item  active={breadcrumb.path1 ? '' : 'active' }>
              {breadcrumb.level2}
            </Breadcrumb.Item> 
          )}
          { breadcrumb.level3 && (
            <Breadcrumb.Item active={breadcrumb.path2 ? '' : 'active' }>
              {breadcrumb.level3}
            </Breadcrumb.Item>
          )}
        </Breadcrumb>
      </Fragment>
    );
  }
}

export default withRouter(BreadCrumb);