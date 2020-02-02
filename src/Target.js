import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? 'rgb(29, 51, 81)' : 'steelblue';

    return connectDropTarget(
      <div className="target" style={{ background: backgroundColor }}>
        Trash
      </div>
    );
  }
}

export default DropTarget('item', {}, collect)(Target);
