import React from 'react'
import { ToggleGroup } from '@chainkeeping/ui';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

import FeaturesImage from '../molecules/features-image';
import FeaturesStep from '../molecules/features-steps';
import CryptoTaxComputationIcon from '../atoms/crypto-tax-computation-icon';
import ForAccountingPractitionersIcon from '../atoms/for-accounting-practitioners-icon';
import CryptoPayrollIcon from '../atoms/crypto-payroll-icon';
import CryptoPaymentsIcon from '../atoms/crypto-payments-icon';
import CryptoInvoicingIcon from '../atoms/crypto-invoicing-icon';
import CryptoFinancialReportingIcon from '../atoms/crypto-financial-reporting-icon';
import { setFeatureValue } from '@/redux/slices/features.slice';

const features = [
    {
        icon: <CryptoTaxComputationIcon />,
        value: "tax-computation",
        title: "Crypto tax computation",
        description: "Computation, filing, optimization and consultation"
    },
    {
        icon: <ForAccountingPractitionersIcon />,
        value: "practioners",
        title: "For accounting practitioners",
        description: "Enable your clients stay compliant with crypto tax regulations."
    },
    {
        icon: <CryptoPayrollIcon />,
        value: "payroll",
        title: 'Crypto payroll',
        description: 'Employee records, PAYE, Pension figure, NHIS, NHF, Life insurance.'
    },
    {
        icon: <CryptoPaymentsIcon />,
        value: "payments",
        title: 'Crypto payments',
        description: 'Pay vendors, Bills, Bulk and Single payments.'
    },
    {
        icon: <CryptoInvoicingIcon />,
        value: "invoicing",
        title: 'Crypto invoicing',
        description: 'Bill customers with Sales invoice and record purchases'
    },
    {
        icon: <CryptoFinancialReportingIcon />,
        value: "reporting",
        title: 'Crypto financial reporting',
        description: 'Integration with accounting softwares for proper reporting, consulting.'
    },
]

const FeaturesWidget = () => {
    const dispatch: AppDispatch = useDispatch();
    const feature = useSelector((state: RootState) => state.features.feature);
    return (
        <div className='w-full h-fit flex items-center justify-between'>
            <ToggleGroup type="single" orientation='vertical' value={feature}
                onValueChange={(newValue) => {
                    if (newValue) {
                        dispatch(setFeatureValue(newValue));
                    }
                }}
                className='h-full max-h-[456px] flex flex-col items-start gap-y-9'>
                {features?.map(({ value, description, icon, title }, idx) => (
                    <FeaturesStep key={idx} description={description} icon={icon} title={title} value={value} toggleGroupValue={feature} />
                ))}
            </ToggleGroup>

            <FeaturesImage feature={feature} />
        </div>
    )
}

export default FeaturesWidget