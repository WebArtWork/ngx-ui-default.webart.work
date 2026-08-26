import companyData from '../../data/company/company.json';
import { CompanyProfile } from './company.interface';

type RawCompanyProfile = Partial<CompanyProfile>;

const rawCompanyProfile = companyData as RawCompanyProfile;

export const companyProfile: CompanyProfile = {
	_id: _stringOrFallback(rawCompanyProfile._id),
	name: _stringOrFallback(rawCompanyProfile.name, 'Company'),
	title: _stringOrFallback(rawCompanyProfile.title, rawCompanyProfile.name ?? 'Company'),
	description: _stringOrFallback(rawCompanyProfile.description),
	image: _stringOrFallback(rawCompanyProfile.image),
	favicon: _stringOrFallback(rawCompanyProfile.favicon, rawCompanyProfile.image ?? ''),
	siteUrl: _trimTrailingSlash(_stringOrFallback(rawCompanyProfile.siteUrl)),
};

function _stringOrFallback(value: string | null | undefined, fallback = ''): string {
	return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}

function _trimTrailingSlash(value: string): string {
	return value.endsWith('/') ? value.slice(0, -1) : value;
}
