import PropTypes from 'prop-types';
import React from 'react';
import { guid } from '../utils';


class Overlay extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        classNamesSettings: PropTypes.object,
    };

    constructor(props) {
        super(props);
        const { active, onOpen } = props;
        const uid = guid();
        this.bgUid = `Overlay${uid}`;
        this.btnUid = `OverlayBtn${uid}`;
        this.state = { active: active || false };
        this.onCloseHandler = this.onCloseHandler.bind(this);
        active && typeof onOpen === 'function' && onOpen();
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ active: nextProps.active || false });
    };

    componentDidUpdate(_, prevState) {
        if (
            prevState.active === false &&
            this.state.active === true &&
            typeof this.props.onOpen === 'function'
        ) this.props.onOpen();
    };

    componentWillUnmount() {
        document.body.style.overflow = null;
    };

    onCloseHandler(e) {
        if (e.target.id === this.bgUid || e.target.id === this.btnUid) {
            e.stopPropagation();
            document.body.style.overflow = null;
            if (this.props.onClose) this.props.onClose();
            this.setState({ active: false });
        }
    };

    render() {
        if (!this.state.active) return null;
        if (document) document.body.style.overflow = 'hidden';

        const {
            overlayClassName = 'overlay',
            overlayBodyClassName = 'overlay__body',
            overlayButtonClassName = 'overlay__button',
        } = this.props.classNamesSettings || {};

        return (
            <div id={this.bgUid} className={overlayClassName} onClick={this.onCloseHandler}>
                <div className={overlayBodyClassName}>
                    <button id={this.btnUid} className={overlayButtonClassName} onClick={this.onCloseHandler} />
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export { Overlay };
