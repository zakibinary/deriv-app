import React from 'react';
import { observer } from 'mobx-react-lite';
import { Modal, Text, Icon, Button } from '@deriv/components';
import { localize } from '@deriv/translations';
import { useStores } from 'Stores';

const GetPasswordModal: React.FC = () => {
    const { ui_store, config_store, mt5_store } = useStores();

    const [wallets] = React.useState([
        'IcWalletSkrill',
        'IcWalletCreditDebit',
        'IcWalletCrypto',
        'IcWalletPaymentAgent',
        'IcWalletNeteller',
        'IcWalletZingpay',
        'IcWalletJeton',
        'IcWalletSticpay',
        'IcWalletPaytrust',
        'IcWalletDp2p',
        'IcWalletWebmoney',
        'IcWalletFasapay',
        'IcWalletSkrill',
        'IcWalletCreditDebit',
        'IcWalletCrypto',
    ]);

    const { is_get_wallet_modal_open, disableGetPasswordModal } = ui_store;
    const { beginRealSignupForMt5 } = mt5_store;

    const closeModal = () => {
        disableGetPasswordModal();
    };

    const onClickGetWallet = () => {
        disableGetPasswordModal();
        beginRealSignupForMt5();
    };

    return (
        <Modal
            className='dw-get-wallet-modal'
            is_open={is_get_wallet_modal_open}
            width={'544px'}
            toggleModal={closeModal}
            has_close_icon
        >
            <Modal.Body>
                <div className='dw-get-wallet-modal__body'>
                    <Text className='dw-get-wallet-modal__title' size='m' weight='bold' align='center'>
                        Get a Wallet to fund your app
                    </Text>
                    <div className='dw-get-wallet-modal__content'>
                        <div className='dw-get-wallet-modal__wallet-list'>
                            {wallets.map((wallet, i) => (
                                <div key={`${wallet}${i}`} className='dw-get-wallet-modal__wallet'>
                                    <Icon icon={wallet} />
                                </div>
                            ))}
                        </div>
                        <div className='dw-get-wallet-modal__selected-app-wrapper'>
                            <div className='dw-get-wallet-modal__selected-app'>
                                <img
                                    className='dw-get-wallet-modal__selected-app-background'
                                    src={`${config_store.asset_path}/images/app-card-bg.svg`}
                                />
                                <div className='dw-get-wallet-modal__selected-app-title-wrapper'>
                                    <div className='dw-get-wallet-modal__selected-app-title'>
                                        <Text size='xs' weight='bold'>
                                            {localize('DMT5 Synthetic')}
                                        </Text>
                                    </div>
                                </div>
                                <div className='dw-get-wallet-modal__selected-app-footer'>
                                    <Text size='xs' weight='bold' line-height='xl'>
                                        -.--
                                    </Text>
                                    <Text size='xxs' line-height='s'>
                                        {localize('Linked wallet: -')}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer has_separator>
                <Button has_effect text={localize('Get a Wallet')} primary onClick={onClickGetWallet} />
            </Modal.Footer>
        </Modal>
    );
};

export default observer(GetPasswordModal);
