const initialBricks = [
  {
    name: 'Cover',
    path: 'demo/1._STACK_cover.pptx',
    column: 0,
    checked: true,
    start: 0,
    count: 1
  },
  {
    name: 'Team',
    path: 'demo/2._STACK_who_we_are.pptx',
    column: 0,
    checked: false,
    start: 0,
    count: 1
  },
  {
    name: 'Benefits',
    path: 'demo/3._STACK_what_we_help_you_do_&_what_your_benefits_are.pptx',
    column: 0,
    checked: true,
    start: 0,
    count: 2
  },
  {
    name: 'Thanks',
    path: 'demo/4._STACK_thank_you_&_legal_mentions.pptx',
    column: 1,
    checked: true,
    start: 0,
    count: 1
  },
  {
    name: 'Cover',
    path: 'demo/1._STACK_cover.pptx',
    column: 1,
    checked: false,
    start: 0,
    count: 1
  },
  {
    name: 'Team',
    path: 'demo/2._STACK_who_we_are.pptx',
    column: 2,
    checked: true,
    start: 0,
    count: 1
  },
  {
    name: 'Benefits',
    path: 'demo/3._STACK_what_we_help_you_do_&_what_your_benefits_are.pptx',
    column: 3,
    checked: false,
    start: 0,
    count: 2
  },
  {
    name: 'Thanks',
    path: 'demo/4._STACK_thank_you_&_legal_mentions.pptx',
    column: 3,
    checked: true,
    start: 0,
    count: 1
  }
];


export default function bricks(req) {
  return new Promise((resolve, reject) => {
    resolve(initialBricks);
  });
}
