package com.highradius.model;
import java.io.Serializable;
import java.sql.Date;

public class AcctDocHeader implements Serializable
{
	
	int id;
	int accountId;
    String documentNumberNorm;
	String companyCode;
	String fiscalYear;
	String branch;
	String customerNumberNorm;
	int customerMapId;
	Date documentDateNorm;
	Date baselineDateNorm;
	Date dueDateNorm;
	String invoiceNumberNorm;
	double openAmountNorm;
	String paymentTerms;
	Date clearingDateNorm;
	int isOpen; 
	String orderType;
	Date orderDate;
	String businessArea;
	Date shipDate;
	int jobId;
	double taxAmt;
	double currentDisputeAmount;
	String shipTo;
	int documentId;
	Date documentDate;
	double actualOpenAmount;
	Date dueDate;
	int invoiceAge;
	int isvalidDispute;
	double  retainageAmount;
	String postingKey;
	int strategyId;
	String currency;
	String debitCreditIndicator;
	double validOpenAmount;
	String customerName;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAccountId() {
		return accountId;
	}
	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}
	public String getDocumentNumberNorm() {
		return documentNumberNorm;
	}
	public void setDocumentNumberNorm(String documentNumberNorm) {
		this.documentNumberNorm = documentNumberNorm;
	}
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}
	public String getFiscalYear() {
		return fiscalYear;
	}
	public void setFiscalYear(String fiscalYear) {
		this.fiscalYear = fiscalYear;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getCustomerNumberNorm() {
		return customerNumberNorm;
	}
	public void setCustomerNumberNorm(String customerNumberNorm) {
		this.customerNumberNorm = customerNumberNorm;
	}
	public int getCustomerMapId() {
		return customerMapId;
	}
	public void setCustomerMapId(int customerMapId) {
		this.customerMapId = customerMapId;
	}
	public Date getDocumentDateNorm() {
		return documentDateNorm;
	}
	public void setDocumentDateNorm(Date documentDateNorm) {
		this.documentDateNorm = documentDateNorm;
	}
	public Date getBaselineDateNorm() {
		return baselineDateNorm;
	}
	public void setBaselineDateNorm(Date baselineDateNorm) {
		this.baselineDateNorm = baselineDateNorm;
	}
	public Date getDueDateNorm() {
		return dueDateNorm;
	}
	public void setDueDateNorm(Date dueDateNorm) {
		this.dueDateNorm = dueDateNorm;
	}
	public String getInvoiceNumberNorm() {
		return invoiceNumberNorm;
	}
	public void setInvoiceNumberNorm(String invoiceNumberNorm) {
		this.invoiceNumberNorm = invoiceNumberNorm;
	}
	public double getOpenAmountNorm() {
		return openAmountNorm;
	}
	public void setOpenAmountNorm(double openAmountNorm) {
		this.openAmountNorm = openAmountNorm;
	}
	public String getPaymentTerms() {
		return paymentTerms;
	}
	public void setPaymentTerms(String paymentTerms) {
		this.paymentTerms = paymentTerms;
	}
	public Date getClearingDateNorm() {
		return clearingDateNorm;
	}
	public void setClearingDateNorm(Date clearingDateNorm) {
		this.clearingDateNorm = clearingDateNorm;
	}
	public int getIsOpen() {
		return isOpen;
	}
	public void setIsOpen(int isOpen) {
		this.isOpen = isOpen;
	}
	public String getOrderType() {
		return orderType;
	}
	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	public String getBusinessArea() {
		return businessArea;
	}
	public void setBusinessArea(String businessArea) {
		this.businessArea = businessArea;
	}
	public Date getShipDate() {
		return shipDate;
	}
	public void setShipDate(Date shipDate) {
		this.shipDate = shipDate;
	}
	public int getJobId() {
		return jobId;
	}
	public void setJobId(int jobId) {
		this.jobId = jobId;
	}
	public double getTaxAmt() {
		return taxAmt;
	}
	public void setTaxAmt(double taxAmt) {
		this.taxAmt = taxAmt;
	}
	public double getCurrentDisputeAmount() {
		return currentDisputeAmount;
	}
	public void setCurrentDisputeAmount(double currentDisputeAmount) {
		this.currentDisputeAmount = currentDisputeAmount;
	}
	public String getShipTo() {
		return shipTo;
	}
	public void setShipTo(String shipTo) {
		this.shipTo = shipTo;
	}
	public int getDocumentId() {
		return documentId;
	}
	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}
	public Date getDocumentDate() {
		return documentDate;
	}
	public void setDocumentDate(Date documentDate) {
		this.documentDate = documentDate;
	}
	public double getActualOpenAmount() {
		return actualOpenAmount;
	}
	public void setActualOpenAmount(double actualOpenAmount) {
		this.actualOpenAmount = actualOpenAmount;
	}
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	public int getInvoiceAge() {
		return invoiceAge;
	}
	public void setInvoiceAge(int invoiceAge) {
		this.invoiceAge = invoiceAge;
	}
	public int getIsvalidDispute() {
		return isvalidDispute;
	}
	public void setIsvalidDispute(int isvalidDispute) {
		this.isvalidDispute = isvalidDispute;
	}
	public double getRetainageAmount() {
		return retainageAmount;
	}
	public void setRetainageAmount(double retainageAmount) {
		this.retainageAmount = retainageAmount;
	}
	public String getPostingKey() {
		return postingKey;
	}
	public void setPostingKey(String postingKey) {
		this.postingKey = postingKey;
	}
	public int getStrategyId() {
		return strategyId;
	}
	public void setStrategyId(int strategyId) {
		this.strategyId = strategyId;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getDebitCreditIndicator() {
		return debitCreditIndicator;
	}
	public void setDebitCreditIndicator(String debitCreditIndicator) {
		this.debitCreditIndicator = debitCreditIndicator;
	}
	public double getValidOpenAmount() {
		return validOpenAmount;
	}
	public void setValidOpenAmount(double validOpenAmount) {
		this.validOpenAmount = validOpenAmount;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	
	
}
