# periodic-periodic-table

In a social community I'm a member of, one participant known for cooking up bad ideas proposed:

> Periodic periodic table. A periodic table that only displays one element per second, rotating through them.

This struck me an interesting proposition, since it felt inherently doable, so I figured I'd give it a shot.

I'll refer to the project as "PPT" - not to be confused with the popular PowerPoint™️ file extension.

## Approach

I wanted to add some constraints - such as:

- The end result should be viewable in a browser
- I don't want to run any hosting for this, so probably a static web page

I thought a little bit about different ways to accomplish this, and came up with stories:

    Given a User with a web browser
    When loading the PPT page
    Then they see the PPT in action

## Technology

I chose to try and stay as simple as possible and use only HTML, JavaScript and CSS to accomplish the simplistic goal.

Structure:

```
[root]
├── README.md  <= This file
├── css
│   └── styles.css <= setting the view styles
├── favicon.ico <= an icon for the browser tab
├── index.html  <= basic scaffold of the page
└── js
    └── scripts.js <= main logic for data fetching, loop to update HTML
```

## References

- [Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON) - the source of the data used
- [Ptable](https://www.ptable.com/) - for inspiration on how elelmebts are represented

## Author

- [Mike Fiedler](https://www.miketheman.net)
