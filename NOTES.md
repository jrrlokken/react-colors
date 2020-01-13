### Click Swallowing in react-sortable-hoc

In video 239, Colt referenced a bug that I could NOT reproduce.

Occasionally, and very occasionally, clicking the 'delete' icon on a draggable color box would trigger a 'drag' event rather than a 'click', and delete would not work.

The 'fix' isn't anything major, and it was implemented. We added the 'distance' parameter to the DraggableColorList, which fixes click swallowing in the react-sortable-hoc SortableContainer. The distance parameter defines a distance that an item needs to be dragged before it is registered as a drag event. By adding a minimal value (in pixels), we prevent the SortableContainer from swallowing our clicks.

```
<DraggableColorList
  colors={this.state.colors}
  removeColor={this.removeColor}
  axis="xy"
  onSortEnd={this.onSortEnd}
  distance={5}
/>
```
