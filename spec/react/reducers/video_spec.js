import { expect } from 'chai';
import sinon from 'sinon';

import {
  setVideoNode,
  setVideoSource,
  playVideo
} from '../../../react/actions/video.js';

import {
  video,
} from '../../../react/reducers/video.js';


describe('video reducer', () => {
  describe('when given a SET_VIDEO_NODE action', () => {
    it("returns the action's 'video' property", () => {
      let videoNode = "a video DOM node";
      let action = setVideoNode(videoNode);
      expect(video('_state', action)).to.equal(videoNode);
    });
  });

  describe('when given a SET_VIDEO_SOURCE action', () => {
    let bandwidth,
        action,
        state;

    before(() => {
      bandwidth = 1000;
      action = setVideoSource(bandwidth);
      state = {};
    });

    it("sets the video source to the local video path with a kbps param", () => {
      video(state, action);
      expect(state.src).to.equal('/video?kbps=1000');
    });

    it("returns the state", () => {
      expect(video(state, action)).to.deep.equal({
        src: '/video?kbps=1000'
      })
    });
  });

  describe('when given a PLAY_VIDEO action', () => {
    let action, state;

    before(() => {
      action = playVideo();
      state = { play: () => {} };
      sinon.stub(state, 'play');
    });

    it('calls the play function on the video node stored in the state', () => {
      video(state, action);
      sinon.assert.calledOnce(state.play);
    });

    it('returns state', () => {
      expect(video(state, action)).to.equal(state);
    });
  });

  describe('given any other action', () => {
    it('returns the state', () => {
      let action = { type: 'ANY_OTHER_ACTION' };
      let state = 'the existing video state';
      expect(video(state, action)).to.equal(state);
    });
  });
});
