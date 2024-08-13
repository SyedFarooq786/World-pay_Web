/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createPaymentRouter from "./Payment.router";
import createPaymentDetailRouter from "./PaymentDetail.router";
import createPaymentHistoryRouter from "./PaymentHistory.router";
import createReceiptRouter from "./Receipt.router";
import createPaymentMethodRouter from "./PaymentMethod.router";
import createCustomerSupportRouter from "./CustomerSupport.router";
import createRagVectorRouter from "./RagVector.router";
import createExchangeRateRouter from "./ExchangeRate.router";
import createTermsAndConditionsRouter from "./TermsAndConditions.router";
import createFaqRouter from "./Faq.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as PaymentClientType } from "./Payment.router";
import { ClientType as PaymentDetailClientType } from "./PaymentDetail.router";
import { ClientType as PaymentHistoryClientType } from "./PaymentHistory.router";
import { ClientType as ReceiptClientType } from "./Receipt.router";
import { ClientType as PaymentMethodClientType } from "./PaymentMethod.router";
import { ClientType as CustomerSupportClientType } from "./CustomerSupport.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as ExchangeRateClientType } from "./ExchangeRate.router";
import { ClientType as TermsAndConditionsClientType } from "./TermsAndConditions.router";
import { ClientType as FaqClientType } from "./Faq.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        payment: createPaymentRouter(router, procedure),
        paymentDetail: createPaymentDetailRouter(router, procedure),
        paymentHistory: createPaymentHistoryRouter(router, procedure),
        receipt: createReceiptRouter(router, procedure),
        paymentMethod: createPaymentMethodRouter(router, procedure),
        customerSupport: createCustomerSupportRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        exchangeRate: createExchangeRateRouter(router, procedure),
        termsAndConditions: createTermsAndConditionsRouter(router, procedure),
        faq: createFaqRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    payment: PaymentClientType<AppRouter>;
    paymentDetail: PaymentDetailClientType<AppRouter>;
    paymentHistory: PaymentHistoryClientType<AppRouter>;
    receipt: ReceiptClientType<AppRouter>;
    paymentMethod: PaymentMethodClientType<AppRouter>;
    customerSupport: CustomerSupportClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    exchangeRate: ExchangeRateClientType<AppRouter>;
    termsAndConditions: TermsAndConditionsClientType<AppRouter>;
    faq: FaqClientType<AppRouter>;
}
