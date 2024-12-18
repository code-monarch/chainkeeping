import React from 'react'
import NavListItem from '../molecules/nav-list-item'
import CryptoTaxComputationIcon from '../atoms/nav-icons/crypto-tax-computation-icon'
import ForAccountingPractitionersIcon from '../atoms/nav-icons/for-accounting-practitioners-icon'
import CryptoPayrollIcon from '../atoms/nav-icons/crypto-payroll-icon'
import CryptoPaymentsIcon from '../atoms/nav-icons/crypto-payments-icon'
import CryptoInvoicingIcon from '../atoms/nav-icons/crypto-invoicing-icon'
import CryptoFinancialReportingIcon from '../atoms/nav-icons/crypto-financial-reporting-icon'

const SolutionsNavContent = () => {
  return (
    <div className='bg-inherit w-full h-[280px] grid grid-cols-3 gap-12 mx-auto'>
      <div className='w-full flex flex-col items-center gap-y-9'>
        {/* Crypto tax computation */}
        <NavListItem icon={<CryptoTaxComputationIcon />} href='/' title='Crypto tax computation' description='Computation, filing, optimization and consultation' />

        {/* For accounting practitioners */}
        <NavListItem icon={<ForAccountingPractitionersIcon />} href='/' title='For accounting practitioners' description='Enable your clients stay compliant with crypto tax regulations.' />
      </div>

      <div className='w-full flex flex-col items-center gap-y-9'>
        {/* Crypto payroll */}
        <NavListItem icon={<CryptoPayrollIcon />} href='/' title='Crypto payroll' description='Employee records, PAYE, Pension figure, NHIS, NHF, Life insurance.' />

        {/* Crypto payments */}
        <NavListItem icon={<CryptoPaymentsIcon />} href='/' title='Crypto payments' description='Pay vendors, Bills, Bulk and Single payments.' />
      </div>

      <div className='w-full flex flex-col items-center gap-y-9'>
        {/* Crypto invoicing */}
        <NavListItem icon={<CryptoInvoicingIcon />} href='/' title='Crypto invoicing' description='Bill customers with Sales invoice and record purchases' />

        {/* Crypto financial reporting */}
        <NavListItem icon={<CryptoFinancialReportingIcon />} href='/' title='Crypto financial reporting' description='Integration with accounting softwares for proper reporting, consulting.' />
      </div>
    </div>
  )
}

export default SolutionsNavContent