import { expect } from 'chai';
import {
  SET_VIDEO_SOURCE,
  PLAY_VIDEO,
  SET_VIDEO_NODE,
  setVideoSource,
  playVideo,
  setVideoNode
} from '../../../react/actions/video.js';

describe('setVideoSource', () => {
  it('returns a SET_VIDEO_SOURCE action with the given value', () => {
    let action = setVideoSource(100);
    expect(action.type).to.equal(SET_VIDEO_SOURCE);
    expect(action.bandwidth).to.equal(100);
  });
});

describe('playVideo', () => {
  it('returns a PLAY_VIDEO action with the given value', () => {
    let action = playVideo();
    expect(action.type).to.equal(PLAY_VIDEO);
  });
});

describe('setVideoNode', () => {
  it('returns a SET_VIDEO_NODE action with the given value', () => {
    let node = {};
    let action = setVideoNode(node);
    expect(action.type).to.equal(SET_VIDEO_NODE);
    expect(action.video).to.equal(node);
  });
});
