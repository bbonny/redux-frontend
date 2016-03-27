const TEMPLATE_UNSELECT_ALL = 'redux-example/bricks-combinator-form/TEMPLATE_UNSELECT_ALL';

import {reducer as formReducer} from 'redux-form';

export default formReducer.plugin({
  bricks_combinator: (state, action) => {
    switch (action.type) {
      case TEMPLATE_UNSELECT_ALL:
        const unselectedBricks = [];
        state.bricks.forEach((brick) => {
          const unselectedBrick = {...brick};
          unselectedBrick.checked.value = false;
          unselectedBricks.push(unselectedBrick);
        });
        return {
          ...state,
          bricks: unselectedBricks,
          _active: 'unselectAll',
        };
      default:
        return state;
    }
  }
});

export function unselectAll() {
  return {
    type: TEMPLATE_UNSELECT_ALL,
  };
}
