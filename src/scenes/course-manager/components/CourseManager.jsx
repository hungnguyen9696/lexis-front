import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from 'material-ui/Grid'
import CourseList from './CourseList'
import CourseDetail from './CourseDetail'
import * as actonCreators from '../action-creators'

import { Link, Route, Switch } from 'react-router'

import type { AppState } from 'core/types'
import type { CourseManagerState } from '../types'

const Wrapper = styled(Grid)`
  padding: 2rem;
  width: 100%;
`

// type CourseManagerProps = {
//     courseManager: CourseManagerState,
//     actions: any,
// }
export class CourseManager extends Component {
  // props: CourseManagerProps
  state = {}
  componentWillMount () {
    this.props.actions.main.start()
  }

  render () {
    const { courseManager } = this.props

    return (
      <Wrapper container spacing={24}>
        <Switch>
          <Route path='/course-manager/course-detail' component={CourseDetail}>
            {/* have direct asses the selected course in redux */}
          </Route>
          <Route path='/course-manager' component={CourseList}>
            {/* directly take course list from redux */}
          </Route>
        </Switch>
      </Wrapper>
    )
  }
}
// outdated. Children component take their own data from redux
function mapStateToProps (state: AppState) {
  return {
    courseManager: state.courseManager
  }
}
//
function mapDispatchToProps (dispatch) {
  return {
    actions: {
      details: bindActionCreators(actonCreators.detailsActions, dispatch),
      filter: bindActionCreators(actonCreators.filterActions, dispatch),
      main: bindActionCreators(actonCreators.mainActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManager)
